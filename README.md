# Felesel Readme

## How to run
react-native run-android

## Connect Android Device from IP
adb tcpip 5555
adb connect 192.168.1.24

## Display android logs
db logcat *:D | findstr com.felesel
adb logcat *:E
