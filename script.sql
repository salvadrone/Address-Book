SELECT name,title,rating,rating_date 
FROM ((reviewers 
INNER JOIN ratings ON reviewers.id = ratings.reviewer_id) 
INNER JOIN books ON ratings.book_id = books.id) 
ORDER BY name,title,rating;
