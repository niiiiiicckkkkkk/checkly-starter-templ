import {
    EmailAlertChannel,
} from 'checkly/constructs'

export const emailChannel = new EmailAlertChannel('my-email-channel', {
    // TODO: fill in your email address
    address: "your email here",
    sendFailure: true,
    sendRecovery: true,
    sendDegraded: false,
    sslExpiry: true,
    sslExpiryThreshold: 30
})