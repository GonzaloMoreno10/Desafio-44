import twilio from 'twilio';

class Twilio {
  twilio;

  constructor() {
    this.twilio = twilio(
      'AC5fa0e7e39e0382754ef8cdad1d2c4c0d',
      '291b84dbf1c42f48ae47eb67945f6c0b',
    );
  }

  async sendMessage(cellphoneNumber, message) {
    const params = {
      body: message,
      from: 15306272141,
      to: cellphoneNumber,
    };

    const response = await this.twilio.messages.create(params);
    return response;
  }
}

export const SmsService = new Twilio();
