import general from './en-general.json';
import login from './en-login.json';
import signUp from './en-signUp.json';
import welcome from './en-welcome.json';
import home from './en-home.json';
import room from './en-room.json';
import navigation from './en-navigation.json';

export default {
    ...general,
    ...login,
    ...signUp,
    ...welcome,
    ...home,
    ...room,
    ...navigation,
} as any;
