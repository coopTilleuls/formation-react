const defaultDateTimeFormat = {
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
};

export const formatDate = (date) => {
    return new Intl.DateTimeFormat(
        "fr-FR",
        defaultDateTimeFormat
    ).format(new Date(date));
}
