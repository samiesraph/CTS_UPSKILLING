/* 9. Organizer Event Summary */
SELECT u.full_name, COUNT(e.event_id) AS total_events, e.status
FROM Users u
JOIN Events e ON u.user_id = e.organizer_id
GROUP BY u.user_id, e.status;

