# Royal Flight Club Staff Document Tracker

Automatic annual contract terms are calculated from joining-date anniversaries. These are schedules, not proof of signed renewal. Manual dates are supported. February 29 joins use February 28 anniversaries in non-leap years.

Ticket allowances: joining before 2020 means yearly; joining in 2020 or later means every two years. Entitlement dates are calculated on the joining-date anniversary at every first/second contract renewal, respectively. Tracking starts at the latest reached entitlement at setup, or the first future entitlement for new staff. Earlier payment history is not inferred. Each entitlement has a Taken / Not taken status and stays visible for its current cycle; at the next eligible renewal a new entitlement appears. Historical records without evidence show Not recorded. Prior recorded payments are preserved as Taken. See BENEFITS-NOTES.md for vacation balances, return reminders and record history. Revised roster imports preserve existing document details, notes, settings and payment logs and archive staff omitted from the new list.

Static installable app. No login, server database, analytics, document uploads or automatic emails. All staff records and settings stay in browser local storage under rfc-staff-documents-v1. The public app package contains no staff records. Do not commit backups to a public repository.

Tracks Oman Resident Card, Royal Flight ID, Passport, MOH Health Card and optional Driving Licence, plus employment contract start and end/renewal dates. Imported records with no evidence of document status are marked Not checked yet, not Missing. Annual contract schedules use the joining date, per club rules. Alerts at 60 and 30 calendar days, expired and missing documents, and held documents without an expiry date. The expiry day is shown as “Expires today”. A missing optional licence does not trigger an alert; a held optional licence still tracks its expiry.

Manual email drafts to staff and admin via the device mail app. Admin email is configured locally. Preparing a draft is not recorded as sending. Admin records follow-ups separately. Email delivery requires a configured mail app and connectivity.

Editing documents retains previous entries. Staff deletion is recoverable. JSON backup/restore is local. Store backups privately; they are unencrypted. Records are not shared between devices. Clearing browser data or changing site origin can remove access; back up first. Use a protected office browser profile.

For GitHub Pages publish only this directory's static files, never staff exports. Each app has its own scope and cache. Open online once before offline use. iOS: Safari → Share → Add to Home Screen. Created by Micha Christine Dotimas.
