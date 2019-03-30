import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/entity/sequelize/user.entity';
import { ConstProvider } from 'src/constant/provider.const';
import { Company } from 'src/entity/sequelize/company.entity';

export const databaseProviders = [
    {
        provide: ConstProvider.SEQUELIZE,
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '19931124',
                database: 'test',
            });
            sequelize.addModels([User, Company]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
