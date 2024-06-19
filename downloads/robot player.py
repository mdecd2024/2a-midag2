# pip install pyzmq cbor keyboard
from zmqRemoteApi import RemoteAPIClient
from zmqRemoteApi_IPv6 import RemoteAPIClient
import keyboard
import random
import math
import time

client = RemoteAPIClient('localhost', 23000)
# client = RemoteAPIClient('2001:288:6004:17:2023:cda:4:6', 23000)

print('Program started')
sim = client.getObject('sim')
sim.startSimulation()  # 確保模擬已經啟動
print('Simulation started')

v = 8
y = 40  # 使用 y 代替 z

# 選擇控制的球員
#player = '/redbody1'
player = '/redbody2'
#player = '/redbody3'
#player = '/redbody4'
#player = '/bluebody1'
#player = '/bluebody2'
#player = '/bluebody3'
#player = '/bluebody4'

def setVelocity(lfwV, rfwV, lbwV, rbwV):
    leftMotor1 = sim.getObject(player + '/car_joint_fl')  # 左前
    rightMotor1 = sim.getObject(player + '/car_joint_fr')  # 右前
    leftMotor2 = sim.getObject(player + '/car_joint_bl')  # 左後
    rightMotor2 = sim.getObject(player + '/car_joint_br')  # 右後
    sim.setJointTargetVelocity(leftMotor1, rfwV)  # 左前設置為右前速度
    sim.setJointTargetVelocity(rightMotor1, lfwV)  # 右前設置為左前速度
    sim.setJointTargetVelocity(leftMotor2, rbwV)  # 左後設置為右後速度
    sim.setJointTargetVelocity(rightMotor2, lbwV)  # 右後設置為左後速度
    # 輸入四個變數分別給四個軸速度

def setAngle(y):  # 使用 y 代替 z
    ontology = sim.getObject(player)
    angle = [-90 * math.pi / 180, 0 * math.pi / 180, y * math.pi / 180]
    leftMotor = sim.getObject(player + '/car_joint_fl')  # 左前
    rightMotor = sim.getObject(player + '/car_joint_fr')  # 右前
    sim.setObjectOrientation(leftMotor, ontology, angle)
    sim.setObjectOrientation(rightMotor, ontology, angle)
    # 輸入一個變數改變前輪方向

def controlAngle(y, direction):  # 使用 y 代替 z
    if direction == 'forward':
        if keyboard.is_pressed('a'):
            setAngle(-y)
        elif keyboard.is_pressed('d'):
            setAngle(y)
        else:
            setAngle(0)
    elif direction == 'backward':
        if keyboard.is_pressed('a'):
            setAngle(y)
        elif keyboard.is_pressed('d'):
            setAngle(-y)
        else:
            setAngle(0)

def turnover():
    floor = sim.getObject('/Floor')
    player1 = sim.getObject(player)
    a = sim.getObjectOrientation(player1, floor)
    b = sim.getObjectPosition(player1, floor)
    a[0] = 0
    a[1] = 0
    b[2] = 0.3
    sim.setObjectPosition(player1, floor, b)
    sim.setObjectOrientation(player1, floor, a)

def playerControl(x, y):  # 使用 y 代替 z
    if keyboard.is_pressed('w'):
        if keyboard.is_pressed('a'):
            setVelocity(-x/2, -x, -x/2, -x)  # 減少左轉時的速度
        elif keyboard.is_pressed('d'):
            setVelocity(-x, -x/2, -x, -x/2)  # 減少右轉時的速度
        else:
            setVelocity(-x, -x, -x, -x)  # 調整前進方向
        controlAngle(y, 'forward')
    elif keyboard.is_pressed('s'):
        if keyboard.is_pressed('d'):
            setVelocity(x/2, x, x/2, x)  # 減少左轉時的速度
        elif keyboard.is_pressed('a'):
            setVelocity(x, x/2, x, x/2)  # 減少右轉時的速度
        else:
            setVelocity(x, x, x, x)  # 調整後退方向
        controlAngle(y, 'backward')
    elif keyboard.is_pressed('d'):
        setVelocity(-x/2, x/2, -x/2, x/2)  # 減少左轉時的速度
    elif keyboard.is_pressed('a'):
        setVelocity(x/2, -x/2, x/2, -x/2)  # 減少右轉時的速度
    elif keyboard.is_pressed('space'):
        turnover()
    elif keyboard.is_pressed('q'):
        # 停止模擬
        sim.stopSimulation()
    else:
        setVelocity(0, 0, 0, 0)
        setAngle(0)

def controlArm():
    up1, up2, up3 = 0, 0, 0
    if keyboard.is_pressed('1'):
        up1 = 1  # 上升
    elif keyboard.is_pressed('3'):
        up1 = -1  # 下降

    if keyboard.is_pressed('4'):
        up2 = 1  # 上升
    elif keyboard.is_pressed('6'):
        up2 = -1  # 下降

    if keyboard.is_pressed('7'):
        up3 = 1  # 上升
    elif keyboard.is_pressed('9'):
        up3 = -1  # 下降

    armJoint = sim.getObject(player + '/car_joint_m')
    throwJoint = sim.getObject(player + '/car_joint_t')
    baseJoint = sim.getObject(player + '/car_joint_b')
    
    sim.setJointTargetVelocity(baseJoint, up1)
    sim.setJointTargetVelocity(armJoint, up2)
    sim.setJointTargetVelocity(throwJoint, up3)

while True:
    if keyboard.is_pressed('shift'):
        playerControl(v + 4, y - 20)  # 使用 y 代替 z
    else:
        playerControl(v, y)  # 使用 y 代替 z

    controlArm()  # 控制手臂的上下運動