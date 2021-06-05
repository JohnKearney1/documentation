---
sidebar_position: 1
---

# Project Index

This page details all of the major projects on my [GitHub](https://GitHub.com/JohnKearney1) and gives a brief description.   Not all of the projects have documentation. (I am lazy). 

## Passivbot

Passivbot_futures is a Python 3 script that automatically trades leveraged futures contracts for different cryptocurrencies on offshore markets. PassivBot is entirely open source and may be modified, copied and redistributed in any manner desired. Passivbot is considered a trading utility designed to assist with “chop” or indecision in leveraged perpetual futures markets. Leveraged futures contracts are a risk intense derivative and should be approached with extreme caution. Use at your own risk.  

For more on Passivbot see the links below!  

[Source Code](https://github.com/enarjord/passivbot) • [Documentation](https://docs.kearneyjohn.com/docs/Passivbot%20Futures/About) • [Official Wiki](https://github.com/enarjord/passivbot/wiki) • [Discord](https://discord.com/invite/QAF2H2UmzZ) • [Telegram](https://t.me/passivbot_futures)

## Solana Network: REST API

The Solana REST API has two sections; the [Localhost Source](#localhost-source) and the [REST API](https://docs.kearneyjohn.com/docs/Solana%20REST%20API/Endpoints)

#### Localhost Source

The localhost API is a batch of source code I wrote, tested, and released that allows anybody to run their own, custom version of the REST API on their own network. The API is developed in `python3` using `Flask` as the framework. The local framework does not include some of the more complex security features that an internet-connected API might require.

*"Why would anybody want to do that?"*  **... Good question:**

Given the potent operational security risks surrounding facilitating financial transactions on a public interface, it seems apt that every user would be given equal access to whatever suite of tools allows them to programmatically accomplish their goals. The ability for developers to have a locally hosted, provably secure access point to the SPL network expands ease of access and makes developing blockchain applicaitions far more appealing.

#### REST API  

The public REST API is a more robust implementation of the local API, designed to service 100+ requests per second from my own server. The REST API is well documented, and follows the same methods as Solana's official Remote Procedure Call (RPC) API.

Furthermore, Solana's default API utilizes RPC nodes, which are designed to be used by C/C++ programmers. Familiarity with the Microsoft Interface Definition Language (MIDL) and the MIDL compiler are required. Porting the RPC API to other languages is possible (as with python packages like PySolana) but is often tedious, and requires a deeply intimate knowledge of both languages.  

Interpolating the RPC data over to REST accessible data makes the makes the SPL network's data language agnostic and standardizes the method of accessibility; streamlining development with Solana's on-chain data.  

#### Documentation  

[Localhost Docs](https://docs.kearneyjohn.com/docs/Solana%20REST%20API/Localhost%20Source) • [REST API Docs](https://docs.kearneyjohn.com/docs/Solana%20REST%20API/Endpoints)

## JOH5Bot

JOH5Bot (J5) is a Twitter bot inspired by Dan Clarke's [TagBTC](https://twitter.com/tagbtc) bot. The bot monitors a given twitter account for mentions, and buys or sells a given asset using a provisional trading account; in this case, Bitcoin. J5 was a slight alteration of this idea that expunged on the bot's abilities and gave it more operational freedoms. J5 was allowed to trade using discresionary (fixed) leverage on a list of over 100 cryptocurrencies and altcoins based upon twitter votes. The bot was active (no longer) between February and April of 2021, processing several hundred votes during said period. It was at no point profitable.

[Source Code](https://github.com/JohnKearney1/Joh5Bot)

## SlowLoris Suite

The SlowLoris Suite is an eclectic batch of penetration testing tools designed around network security and social engineering testing. It is a command line utility written in python and intended for usage on Windows, Linux and Unix distros. Portions of the software require specialized hardware to function, such as a networking card capible of shifting between monitor mode and managed mode (most computers do not have this by default).  

The SlowLoris Suite is named after the infamous SlowLoris denial of service (DOS) attack, whereby an attacker spoofs a multitude of "laggy" connections to the victim (usually a webserver) in an attempt to consume all available sockets. Once all of the victims' sockets have been consumed, the victim is unable to serve legitimate requests.  

Apart from a SlowLoris attack module, the tool includes a SHA512 hasher, an ARP Poisoning module, a Network Mapper, an Email Spoofer, and a rudimentary PurePy BruteForce module.

[Source Code](https://github.com/JohnKearney1/SlowLoris)
