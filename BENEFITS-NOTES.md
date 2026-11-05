# Ticket status and vacations

This app uses club rules supplied by its owner. It does not establish employment policy.

Ticket allowance dates follow the joining-date renewal cycle: annual for pre-2020 joins and every two years for 2020 onwards. Each entitlement has its own Received / Not yet received status. Historical allowances without recorded evidence show Not recorded. Prior recorded ticket payments are preserved as Received. A Received entitlement remains visible until the next eligible cycle; history is retained. These statuses are separate from document expiry alerts.

Vacation entitlement is annual. Each leave year follows the joining-date anniversary. Dates are inclusive calendar days, including weekends. For 29 February joining dates the existing contract anniversary convention is 28 February in non-leap years.

Admin sets a verified starting balance once, including any leave accumulated before setup. This is the balance at the start of its as-of date, before vacation on that date. Unused leave carries forward without an annual reset. The staff-specific annual entitlement is added on each joining-date anniversary strictly after the verified starting date. Each yearly addition is stored by date once; reopening, restoring or updating the roster cannot duplicate it. Existing addition amounts are retained if the annual entitlement later changes, and rate history is recorded for future additions.

Approved and completed vacation days since the starting date reduce the running balance. All future approved vacation days are reserved separately, including bookings across leave-year boundaries. Future annual additions are counted when their anniversary arrives. Planned, cancelled and soft-deleted records do not reduce balances. A later verified balance is a correction/checkpoint that already includes earlier additions and usage, not another annual grant; previous records remain in history. Earlier unrecorded leave is not invented. The calculated-balance shortcut uses the balance at the start of today so today's leave is not deducted twice.

Expected and actual return dates are separate. Approved vacations show return reminders until a return is recorded. Vacation edits retain previous versions; deletion is recoverable. Ticket entries, vacations, opening balances and histories are included in device-local JSON backups. Revised staff-roster imports preserve them.

All records stay in browser storage. Only this app's code and assets are published; never publish staff exports, backups or screenshots containing staff details.
