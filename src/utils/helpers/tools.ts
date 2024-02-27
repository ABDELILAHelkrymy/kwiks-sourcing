export const calcDurationOrTimeAgo = (startTime: string, endTime?: string) => {
    const isStartTimeOnly = endTime === undefined;
    if (isStartTimeOnly) {
        const [startHours, startMinutes, startDay, startMonth, startYear] = startTime.match(/\d+/g)!.map(Number);
        const start = new Date(startYear, startMonth - 1, startDay, startHours, startMinutes);

        const currentTime = new Date().getTime();
        const diffMs = currentTime - start.getTime();
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

        if (diffDays > 1) {
            return `${diffDays} days`;
        } else if (diffDays === 1) {
            return "1 day";
        } else if (diffHours > 1) {
            return `${diffHours} hours`;
        } else if (diffHours === 1) {
            return "1 hour";
        } else {
            const diffMinutes = Math.floor(diffMs / (1000 * 60));
            return `${diffMinutes} min`;
        }
    } else {
        const [startHours, startMinutes] = startTime.split(':').map(Number);
        const [endHours, endMinutes] = endTime!.split(':').map(Number);

        const start = new Date();
        start.setHours(startHours, startMinutes);

        const end = new Date();
        end.setHours(endHours, endMinutes);

        const diffMs = end.getTime() - start.getTime();
        const hoursDiff = Math.floor(diffMs / (1000 * 60 * 60));
        const minutesDiff = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

        return hoursDiff > 0 ? `${hoursDiff} hours` : `${minutesDiff} min`;
    }
};


const parseDateString = (dateString: string) => {
    const [day, month, year] = dateString.split('/');
    return new Date(`${year}-${month}-${day}`);
};

export const getDay = (dateString: string) => {
    const today = new Date();
    const meetingDate = parseDateString(dateString);

    
    const clearTime = (date: Date) => {
        date.setHours(0, 0, 0, 0);
        return date;
    };

    const clearToday = clearTime(new Date(today));
    const clearMeetingDate = clearTime(meetingDate);

    if (clearToday.getTime() === clearMeetingDate.getTime()) {
        return "Today";
    }

    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const clearTomorrow = clearTime(tomorrow);

    if (clearTomorrow.getTime() === clearMeetingDate.getTime()) {
        return "Tomorrow";
    }

    return dateString;
};