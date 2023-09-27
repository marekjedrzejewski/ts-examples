// You can use template literals for types
type World = "World"
type Greeting = `Hello ${World}`

// They can be combined together
type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;

// You can supply multiple arguments and ts handles it
type Lang = "en" | "de" | "pl";
type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`;

// NOTE: Ahead-of-time generation recommended for large string unions, but this is useful in smaller cases.