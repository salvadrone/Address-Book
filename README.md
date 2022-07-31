### How it works

First run `server.js` with node:

```sh
~$ node server.js
```

**View all contacts**

Open your browser and enter `localhost:3000/contacts` in the adress bar.

**View single contact**

Type in the address bar `localhost:3000/contacts/contact_id`

**Filter contacts**

Type in the address `localhost:3000/contacts?phrase=your phrase`

I used `curl` command to test `DELETE` http method, like this:

```sh
~$ curl -X 'DELETE' http://localhost:3000/contacts/contact_id_to_delete
```

### SQL script

First enter to MySQL session:

```sh
~$ mysql -u root -p
```

The create the database and select it:

```mysql
mysql> CREATE DATABASE test_db
mysql> USE test_db
```

Then run the script `test.sql` and `script.sql`

```mysql
mysql> source test.sql
mysql> source script.sql
```

Done!
