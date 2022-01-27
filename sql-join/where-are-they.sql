select "line1",
"city"."name" as "cityName",
"district",
"country"."name" as "countryName"
from "addresses"
join "cities" as "city" using ("cityId")
join "countries" as "country" using ("countryId")
