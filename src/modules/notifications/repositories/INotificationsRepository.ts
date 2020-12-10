import ICreateNotificationsDTO from '../dtos/ICreateNotificationDTO';
import Notification from '../infra/typeorm/schemas/Notification';

export default interface INotificcationsRepository {
    creatte(data: ICreateNotificationsDTO): Promise<Notification>;
}
