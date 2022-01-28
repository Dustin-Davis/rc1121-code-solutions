select "c"."firstName",
"c"."lastName"
from "rentals"
join "inventory" using ("inventoryId")
join "films" as "f" using ("filmId")
join "customers" as "c" using ("customerId")
where "title" = 'Magic Mallrats';
