import asyncio
import websockets
import RPi.GPIO as GPIO          
from time import sleep

in1 = 23
in2 = 24
ena = 25
in3 = 17
in4 = 27
enb = 18
temp1=1

GPIO.setmode(GPIO.BCM)
GPIO.setup(in1,GPIO.OUT)
GPIO.setup(in2,GPIO.OUT)
GPIO.setup(ena,GPIO.OUT)
GPIO.setup(in3,GPIO.OUT)
GPIO.setup(in4,GPIO.OUT)
GPIO.setup(enb,GPIO.OUT)
GPIO.output(in1,GPIO.LOW)
GPIO.output(in2,GPIO.LOW)
GPIO.output(in3,GPIO.LOW)
GPIO.output(in4,GPIO.LOW)
q=GPIO.PWM(enb,1000)
p=GPIO.PWM(ena,1000)
p.start(90)
q.start(90)



async def handle_message(websocket, path):
    async for message in websocket:
        # Interpret incoming message to determine movement command
        movement_command = message.strip()  # Assuming messages are simple stri>
        print(message)
        if massage == "forward":
            forword()
        elif message == "backward":
            backword()
        elif message == "right":
            right()
        elif message == "left":
            left()
        elif message == "stop":
            stop()


def forword():
    GPIO.output(in1,GPIO.HIGH)
    GPIO.output(in2,GPIO.LOW)
    GPIO.output(in3,GPIO.HIGH)
    GPIO.output(in4,GPIO.LOW)

def backword():
    GPIO.output(in1,GPIO.HIGH)
    GPIO.output(in2,GPIO.LOW)
    GPIO.output(in3,GPIO.HIGH)
    GPIO.output(in4,GPIO.LOW)

def right():
    GPIO.output(in1,GPIO.HIGH)
    GPIO.output(in2,GPIO.LOW)
    GPIO.output(in3,GPIO.LOW)
    GPIO.output(in4,GPIO.HIGH)

def left():
    GPIO.output(in1,GPIO.LOW)
    GPIO.output(in2,GPIO.HIGH)
    GPIO.output(in3,GPIO.HIGH)
    GPIO.output(in4,GPIO.LOW)

def stop():
    GPIO.output(in1,GPIO.LOW)
    GPIO.output(in2,GPIO.LOW)
    GPIO.output(in3,GPIO.LOW)
    GPIO.output(in4,GPIO.LOW)


start_server = websockets.serve(handle_message, "0.0.0.0", 8765)  # Replace IP >

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()