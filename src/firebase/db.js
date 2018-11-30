import { db } from './firebase'

export const onceGetPosts = () =>
    db.ref('wallpapers').once('value')