import general from './zhTW-general.json';
import login from './zhTw-login.json';
import signUp from './zhTW-signUp.json';
import welcome from './zhTw-welcome.json';
import home from './zhTW-home.json';
import room from './zhTW-room.json';
import navigation from './zhTw-navigation.json';

export default {
    ...general,
    ...login,
    ...signUp,
    ...welcome,
    ...home,
    ...room,
    ...navigation,
} as any;
