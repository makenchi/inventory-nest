import { MigrationInterface, QueryRunner } from "typeorm";

export class Init.ts1686461039654 implements MigrationInterface {
    name = 'Init.ts1686461039654'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."item_sizes_enum" AS ENUM('P', 'M', 'G', 'GG', 'XG', 'XGG')`);
        await queryRunner.query(`CREATE TABLE "item" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "isActive" boolean NOT NULL DEFAULT true, "isArchived" boolean NOT NULL DEFAULT false, "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createdBy" character varying(300) NOT NULL, "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "lastChangedBy" character varying(300) NOT NULL, "internalComment" character varying(300), "name" character varying(300) NOT NULL, "description" character varying(300) NOT NULL, "image" character varying(300) NOT NULL, "price" double precision NOT NULL, "sizes" "public"."item_sizes_enum" array NOT NULL DEFAULT 'P', "author" character varying(300) NOT NULL, "metatags" character varying(300) array NOT NULL, "slug" character varying(300) NOT NULL, CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "item"`);
        await queryRunner.query(`DROP TYPE "public"."item_sizes_enum"`);
    }

}
