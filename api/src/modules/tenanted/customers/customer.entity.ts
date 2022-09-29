import { AbstractEntity } from '../../../abstract.entity'; 
import { Entity, Column } from 'typeorm'; 

@Entity({ name: 'customers'})
export class Customer extends AbstractEntity {
    @Column()
    first_name: string

    @Column()
    last_name: string

    @Column()
    email: string

    @Column()
    phone: string
}