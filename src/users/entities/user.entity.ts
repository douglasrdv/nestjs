import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  parentUserId: string | null;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'parentUserId' })
  parentUser: User;
}
