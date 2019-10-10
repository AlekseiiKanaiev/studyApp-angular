import { Data } from '@angular/router';

export class Video {
    id: number;
    tag: string;
    title: string;
    video_id: string;
    body: string;
    create: Data;
}

export class User {
    id: number;
    posUkr: string;
    posRus: string;
    fNameUkr: string;
    fNameRus: string;
    imgName: string;
    phone: string;
}

// id = user.id,
//         pos_ukr = user.position_ukr,
//         pos_rus = user.position_rus,
//         f_name_ukr = user.full_name_ukr,
//         f_name_rus = user.full_name_rus,
//         img_name = user.img_name,
//         phone = user.phone,
//         email = user.email,
//         password = user.password,
//         active = user.active,
//         roles = [dict(name = role.name,
//                     desc = role.description)
//                     for role in user.roles])
//             for user in users])
