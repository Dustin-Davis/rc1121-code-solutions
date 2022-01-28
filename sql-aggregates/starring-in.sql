select "g"."name",
count(*) as "howManyMovies"
from "films" as "f"
join "filmGenre" as "fg" using ("filmId")
join "genres" as "g" using ("genreId")
join "castMembers" as "cm" using ("filmId")
where "actorId" = 178
group by "genreId"
