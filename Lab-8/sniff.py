#!/usr/bin/python3
from scapy.all import *

print("SNIFFING PACKETS.........")

def print_pkt(pkt):                       
   print("Source IP:", pkt[IP].src)
   print("Destination IP:", pkt[IP].dst)
   print("Protocol:", pkt[IP].proto)
   print("\n")

#pkt = sniff(filter='icmp',prn=print_pkt)   						#icmp packets
#pkt = sniff(filter='tcp and dst port 23 and src host 10.0.2.6',prn=print_pkt)   	#TCP packets
pkt = sniff(filter='src net 128.230.0.0/16',prn=print_pkt)   				#subnet packets
