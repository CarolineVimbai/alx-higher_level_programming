#!/bin/bash
-- updates the score of Bob to 10 in the table second_table
SELECT `city`, AVG(`value`) AS `avg_temp`
FROM `temperatures`
GROUP BY `city`
ORDER BY `avg_temp` DESC;
