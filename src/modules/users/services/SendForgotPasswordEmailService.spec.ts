import FakeMailProvider from '@shared/container/providers/MailProvider/fakes/fakeMailProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import SendForgotPasswordEmailRecover from './SendForgotPasswordEmailService';

describe('CreateUser', () => {
    it('shold be able to rocover the password using the email', async () => {
        const fakeUsersRepository = new FakeUsersRepository();
        const fakeMailProvider = new FakeMailProvider();

        const sendMail = jest.spyOn(fakeMailProvider, 'sendMail');

        const sendForgotPasswordEmail = new SendForgotPasswordEmailRecover(
            fakeUsersRepository,
            fakeMailProvider,
        );

        await fakeUsersRepository.create({
            name: 'Rod Andrade',
            email: 'rod@teste.com',
            password: '123456',
        });

        await sendForgotPasswordEmail.execute({
            email: 'rod@teste.com',
        });

        expect(sendMail).toHaveBeenCalled();
    });
});
