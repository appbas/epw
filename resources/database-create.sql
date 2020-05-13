DROP schema epw CASCADE;
CREATE schema epw;
CREATE sequence epw.user_iduser_seq minvalue 1 maxvalue 9999999999
START WITH 1 increment BY 1 cycle;
CREATE TABLE
  epw.user
  (
    iduser bigint NOT NULL DEFAULT nextval('epw.user_iduser_seq'::regclass),
    login CHARACTER VARYING(255) NOT NULL,
    passwordhash CHARACTER VARYING(255) NOT NULL,
    datetimeconfirmate TIMESTAMP(6) WITH TIME zone,
    datetimecreate TIMESTAMP(6) WITH TIME zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    datetimeupdate TIMESTAMP(6) WITH TIME zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    registerhash CHARACTER VARYING(255)
    /* not null*/
    ,
    idfile INTEGER,
    PRIMARY KEY (iduser),
    --    ,constraint user_idfile_fkey foreign key (idfile) references file (idfile) on delete set
    -- null on update cascade,
    UNIQUE (login)
  );
--drop table epw.dothour
CREATE TABLE
  epw.dothour
  (
    iduser bigint NOT NULL,
    DATE DATE NOT NULL,
    hour TIME NOT NULL,
    PRIMARY KEY (iduser, date, hour),
    CONSTRAINT dothour_iduser_fkey FOREIGN KEY (iduser) REFERENCES epw.user (iduser)
  );
  
--select * from epw.dothour;
  
  
create table
    epw.parameter (
        codparameter integer not null,
        description varchar(255) not null,
        value varchar(255) not null,
        constraint parameter_codparameter_pk primary key (codparameter)
    );
select * from epw.dothour


  
  