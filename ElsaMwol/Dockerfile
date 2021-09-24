FROM fusuf/whatsasena:latest

RUN git clone https://github.com/devil-ser/ElsaMwol-V2.1 /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/DEVILSER/Media

CMD ["node", "bot.js"]
