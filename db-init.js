var sqlite = require('sqlite3').verbose();

function dbInit(dbName) {
    var db = new sqlite.Database(dbName || 'test.db');
    db.serialize(function() {
        // create user table
        db.run('create table user (id INTEGER PRIMARY KEY AUTOINCREMENT,' +
            'uuid varchar(128) not null UNIQUE, ' + 
            'gmt_create DATETIME not null, ' + 
            'gmt_modify DATETIME not null, ' + 
            'name varchar(128) ,' + 
            'mobile_no varchar(64) not null, ' + 
            'password varchar(128) not null, ' + 
            'avatar varchar(256), ' + 
            'intro text, ' + 
            'data text)', function(err) {
                if(err) {
                    console.error(err);
                } else {
                    console.log('create table user success! ');
                }
                
            });

        // create index
        db.run('create INDEX user_index on user (id, uuid)', function(err) {
            if(err) {
                console.error(err);
            } else {
                console.log('create index user_index success! ');
            }
        });

        // create article table
        db.run('create table article (id INTEGER PRIMARY KEY AUTOINCREMENT,' +
            'uuid varchar(128) not null UNIQUE, ' + 
            'gmt_create DATETIME not null, ' + 
            'gmt_modify DATETIME not null, ' + 
            'title varchar(128) not null, ' + 
            'content text, ' + 
            'author_id varchar(128) not null, ' + 
            'category_id varchar(128) not null, ' + 
            'tags varchar(256), ' + 
            'status varchar(64) not null, ' + 
            'data text)', function(err) {
                if(err) {
                    console.error(err);
                } else {
                    console.log('create table article success! ');
                }
            });
        
        // create index
        db.run('create INDEX article_index on article (id, uuid, author_id, category_id, status)', function(err) {
            if(err) {
                console.error(err);
            } else {
                console.log('create index article_index success! ');
            }
        });

        // create draft article table
        db.run('create table draft_article (id INTEGER PRIMARY KEY AUTOINCREMENT,' +
            'uuid varchar(128) not null UNIQUE, ' + 
            'gmt_create DATETIME not null, ' + 
            'gmt_modify DATETIME not null, ' + 
            'title varchar(128) not null, ' + 
            'content text, ' + 
            'author_id varchar(128) not null, ' + 
            'category_id varchar(128) not null, ' + 
            'tags varchar(256), ' + 
            'status varchar(64) not null, ' + 
            'data text)', function(err) {
                if(err) {
                    console.error(err);
                } else {
                    console.log('create table draft_article success! ');
                }
            });

        // create index
        db.run('create INDEX draft_article_index on draft_article (id, uuid, author_id, category_id, status)', function(err) {
            if(err) {
                console.error(err);
            } else {
                console.log('create index draft_article_index success! ');
            }
        });

        // create category table
        db.run('create table category (id INTEGER PRIMARY KEY AUTOINCREMENT,' +
            'uuid varchar(128) not null UNIQUE, ' + 
            'gmt_create DATETIME not null, ' + 
            'gmt_modify DATETIME not null, ' + 
            'name varchar(128) not null, ' + 
            'data text)', function(err) {
                if(err) {
                    console.error(err);
                } else {
                    console.log('create table category success! ');
                }
            });

        // create tags table
        db.run('create table tag (id INTEGER PRIMARY KEY AUTOINCREMENT,' +
            'uuid varchar(128) not null UNIQUE, ' + 
            'gmt_create DATETIME not null, ' + 
            'gmt_modify DATETIME not null, ' + 
            'name varchar(128) not null, ' + 
            'data text)', function(err) {
                if(err) {
                    console.error(err);
                } else {
                    console.log('create table tag success! ');
                }
            });

        // create i_like table
        db.run('create table i_like (id INTEGER PRIMARY KEY AUTOINCREMENT, ' + 
        'gmt_create DATETIME not null, ' + 
        'article_id varchar(128) not null, ' + 
        'user_id varchar(128) not null)', function(err) {
            if(err) {
                console.error(err);
            } else {
                console.log('create table i_like success! ');
            }
        });

        // create index
        db.run('create INDEX i_like_index on i_like (id, article_id, user_id)', function(err) {
            if(err) {
                console.error(err);
            } else {
                console.log('create index i_like_index success! ');
            }
        });

        // close
        db.close(function(err) {
            if(err) {
                console.error(err);
            } else {
                console.log('db close. ');
            }
        });
    });
}

dbInit();
