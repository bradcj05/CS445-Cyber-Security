#!/usr/bin/python3
from scapy.all import *

print("SENDING SPOOFED ICMP PACKET.........")
ip = IP(src="10.0.2.7", dst="10.0.2.6") 
icmp = ICMP()                               
pkt = ip/icmp                                
pkt.show()
send(pkt,verbose=0)                          

