#!/bin/bash

source /.jelenv

THIS_NODE_IP=$(ip a | grep -A1 venet0 | grep inet | awk '{print $2}'| sed 's/\/[0-9]*//g' | tail -n 1)

iptables -t nat -D PREROUTING -p tcp --dport 4848 -j DNAT --to-destination ${CTRL_HOST} &>/dev/null
iptables -t nat -D POSTROUTING -p tcp --dst ${CTRL_HOST} --dport 4848 -j SNAT --to-source ${THIS_NODE_IP} &>/dev/null

iptables -t nat -I PREROUTING -p tcp --dport 4848 -j DNAT --to-destination ${CTRL_HOST}
iptables -t nat -I POSTROUTING -p tcp --dst ${CTRL_HOST} --dport 4848 -j SNAT --to-source ${THIS_NODE_IP}
iptables --policy FORWARD ACCEPT; service iptables save &>/dev/null;
