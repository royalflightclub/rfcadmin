# Royal Flight Club Staff Document Tracker

Automatic annual contract terms are calculated from joining-date anniversaries. These are schedules, not proof of signed renewal. Manual dates are supported. February 29 joins use February 28 anniversaries in non-leap years.

Ticket allowances: joining before 2020 means yearly; joining in 2020 or later means every two years. Admin enters the next due date per staff member. Dates do not roll forward merely because they pass. Recording an actual payment retains its history and requires entering the next due date.

Static installable app. No login, server database, analytics, document uploads or automatic emails. All staff records and settings stay in browser local storage under rfc-staff-documents-v1. The public app package contains no staff records. Do not commit backups to a public repository.

Tracks Oman Resident Card, Royal Flight ID, Passport, MOH Health Card and optional Driving Licence, plus employment contract start and end/renewal dates. Imported records with no evidence of document status are marked Not checked yet, not Missing. A joining date is not assumed to be a contract start date. Alerts at 60 and 30 calendar days, expired and missing documents, and held documents without an expiry date. The expiry day is shown as “Expires today”. A missing optional licence does not trigger an alert; a held optional licence still tracks its expiry.

Manual email drafts to staff and admin via the device mail app. Admin email is configured locally. Preparing a draft is not recorded as sending. Admin records follow-ups separately. Email delivery requires a configured mail app and connectivity.

Editing documents retains previous entries. Staff deletion is recoverable. JSON backup/restore is local. Store backups privately; they are unencrypted. Records are not shared between devices. Clearing browser data or changing site origin can remove access; back up first. Use a protected office browser profile.

For GitHub Pages publish only this directory's static files, never staff exports. Each app has its own scope and cache. Open online once before offline use. iOS: Safari → Share → Add to Home Screen. Created by Micha Christine Dotimas.
