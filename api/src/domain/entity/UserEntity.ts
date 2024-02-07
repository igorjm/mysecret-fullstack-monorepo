export default class UserEntity{
    constructor(
        readonly userId: number,
        readonly name: string | null,
        readonly email: string,
        readonly password: string,
        readonly pictureUrl: string | null,
        readonly created_at: Date,
        readonly updated_at: Date,
    ) {}
    static create(email: string, password: string): UserEntity {
        return new UserEntity(
            0,
            null,
            email,
            password,
            null,
            new Date(),
            new Date()
        )
    }
}