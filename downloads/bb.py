# pip install pyzmq cbor keyboard
# zmqRemoteApi_IPv6 為將 zmq 通訊協定修改為 IPv4 與 IPv6 相容
from zmqRemoteApi_IPv6 import RemoteAPIClient
import keyboard

# 利用 zmqRemoteAPI 以 23000 對場景伺服器進行連線
client = RemoteAPIClient('localhost', 23000)

print('Program started')
sim = client.getObject('sim')

# Get the handles of the ball, motorx, and motory objects
ball_handle = sim.getObject('/ball')
motorx_handle = sim.getObject('/motor_x')
motory_handle = sim.getObject('/motor_y')

"""
增大  可以讓系統對誤差的反應更加敏感，從而加快響應速度。
1首先調整 kp (比例增益）：
    目標：    增大  kp 可以讓系統對誤差的反應更加敏感，從而加快響應速度。
步驟：
   a.初始設置：將 ki  和 kd 設為 0，只調整 kp 。
   b.逐步增大 ：
       從一個較小的值開始，例如 1.0。
       逐步增大 kp 的值，例如每次增加 0.5。
   c.觀察系統響應：
        穩定地響應：系統快速達到目標值並保持穩定，沒有明顯的振盪或過衝。
        過衝：如果 kp 過大，系統可能會超過目標值並來回振盪，這時需要減小kp

2 調整 kd （微分增益）
   目標：    增大 kd 可以減少振盪並提高系統穩定性。
步驟：
    a.初始設置：在調整好 kp 之後，開始調整 kd  。
    b.逐步增大 kd ：
         從一個較小的值開始，例如 0.1。
         逐步增大 kd  的值，例如每次增加 0.1。
    c.觀察系統響應：
         減少振盪：系統的振盪幅度減小，響應更加平滑。
         過度阻尼：如果  kd  過大，系統可能會變得響應過慢，這時需要減小 。
         
3. 調整 ki（積分增益）
目標：增大 ki 可以消除穩態誤差，但過大的 ki 會導致系統不穩定。
步驟：
    a.初始設置：在調整好  kp  和 kd  之後，開始調整 。
    b.逐步增大ki ：
        從一個較小的值開始，例如 0.01。
          逐步增大 ki  的值，例如每次增加 0.01。
    c.觀察系統響應：
        消除穩態誤差：系統能夠達到目標值並保持穩定。
        不穩定：如果  ki 過大，系統可能會出現振盪，這時需要減小 ki  。


"""


# PID control constants for x and y coordinates
kp_x = 1 # Proportional gain for x
ki_x = 0.025  # Integral gain for x
kd_x = 0.5
# Derivative gain for x

kp_y = 1# Proportional gain for y
ki_y = 0.025 # Integral gain for y
kd_y = 0.5
# Derivative gain for y

# Initialize error and integral terms for x and y coordinates
error_sum_x = 0.0
last_error_x = 0.0

error_sum_y = 0.0
last_error_y = 0.0

sim.startSimulation()
print('Simulation started')

# Function to get the ball's x and y coordinates
def getBallCoordinates():
    pos = sim.getObjectPosition(ball_handle, -1)
    x = pos[0]
    y = pos[1]
    return x, y

def controlMotor(target_x, target_y, dt):
    global error_sum_x, last_error_x, error_sum_y, last_error_y

    # 獲取當前球的坐標
    current_x, current_y = getBallCoordinates()
    print("Target: (", target_x, ",", target_y, "), Current: (", current_x, ",", current_y, ")")

    # 計算 x 和 y 坐標的誤差
    error_x = target_x - current_x
    error_y = target_y - current_y

    # 更新 x 和 y 坐標的誤差和
    error_sum_x += error_x
    error_sum_y += error_y

    # 計算 x 和 y 坐標的導數
    derivative_x = (error_x - last_error_x) / dt
    derivative_y = (error_y - last_error_y) / dt

    # 計算 x 和 y 坐標的控制信號
    control_signal_x = kp_x * error_x + ki_x * error_sum_x + kd_x * derivative_x
    control_signal_y = kp_y * error_y + ki_y * error_sum_y + kd_y * derivative_y

    # 打印控制信號和誤差
    print("Control Signal X:", control_signal_x, "Error X:", error_x)
    print("Control Signal Y:", control_signal_y, "Error Y:", error_y)

    # 設置 motorx 和 motory 的旋轉角度
    sim.setJointTargetPosition(motorx_handle, control_signal_x)
    sim.setJointTargetPosition(motory_handle, control_signal_y)

    # 更新 x 和 y 坐標的最後誤差
    last_error_x = error_x
    last_error_y = error_y
while True:
    if keyboard.is_pressed('q'):
        # Stop simulation
        sim.stopSimulation()
        break

    # Control the motors to set the ball to the desired coordinates
    controlMotor(-0.3451, 0.005802, 0.005)  # Adjust the time step (dt) and target coordinates as needed

# 終止模擬
#sim.stopSimulation()