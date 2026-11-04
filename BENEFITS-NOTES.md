# Ticket status and vacations

This app uses club rules supplied by its owner. It does not establish employment policy.

Ticket allowance dates follow the joining-date renewal cycle: annual for pre-2020 joins and every two years for 2020 onwards. Each entitlement has its own Received / Not yet received status. Historical allowances without recorded evidence show Not recorded. Prior recorded ticket payments are preserved as Received. A Received entitlement remains visible until the next eligible cycle; history is retained. These statuses are separate from document expiry alerts.

Vacation entitlement is annual. Each leave year follows the joining-date anniversary. Dates are inclusive calendar days, including weekends. For 29 February joining dates the existing contract anniversary convention is 28 February in non-leap years.

Admin sets a verified opening balance and as-of date for each leave year. The opening is the balance at the start of its as-of date, before vacation on that date. Approved and completed vacation days after that date count toward the balance; future approved days are reserved separately. Planned, cancelled and soft-deleted records do not reduce balances. Cross-year vacations are split at leave-year boundaries. Carry-over and prior unrecorded leave are not inferred. A new leave year requires a new verified opening balance.

Expected and actual return dates are separate. Approved vacations show return reminders until a return is recorded. Vacation edits retain previous versions; deletion is recoverable. Ticket entries, vacations, opening balances and histories are included in device-local JSON backups. Revised staff-roster imports preserve them.

All records stay in browser storage. Only this app's code and assets are published; never publish staff exports, backups or screenshots containing staff details.
