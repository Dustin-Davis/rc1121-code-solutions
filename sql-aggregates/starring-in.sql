select "g"."name",
count(*) as "howManyMovies"
from "castMembers"
join "films"  using ("filmId")
join "actors" using ("actorId")
join "filmGenre" using ("filmId")
join "genres" as "g" using ("genreId")
where "firstName" = 'Lisa' and "lastName" = 'Monroe'
group by "genreId"
