#!/usr/bin/python3
from scapy.all import *

print("SENDING SPOOFED ICMP PACKET.........")
ip = IP(dst="76.223.76.81", ttl= 30) 
icmp = ICMP()                               
pkt = ip/icmp                                
pkt.show()
send(pkt,verbose=0)                          

