import requests
import serial
f = open("transactions.txt")
transaction = f.read()

data = {
    'transaction': transaction
}
r = requests.post(url="http://localhost:5000/transactions", json=data)
if(r.status_code == 200):
    print("data uploaded")
    with serial.Serial() as ser:
        ser.baudrate = 9600
        ser.port = "COM3"
        ser.open()
        ser.write("data uploaded")
        ser.close()