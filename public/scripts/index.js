import { Book } from './book.js';
import { books } from './book-collection.js';
/**
 * @param {string} genre
 * @param {number} pagesLimit
 * @returns {Book}
 */
function findSuitableBook(genre, pagesLimit, multipleRecommendations = true) {
    const findAlgorithm = (book) => {
        return book.genre === genre && book.pageAmount <= pagesLimit;
    };
    if (multipleRecommendations) {
        return books.filter(findAlgorithm);
    }
    else {
        return books.find(findAlgorithm);
    }
}
const recommendedBook = findSuitableBook('fantasy', 1000);
if (recommendedBook instanceof Book) {
    console.log(recommendedBook.name);
}
else {
    console.log(recommendedBook[0].name);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNqQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFN0M7Ozs7R0FJRztBQUNILFNBQVMsZ0JBQWdCLENBQUMsS0FBYSxFQUFFLFVBQWtCLEVBQUUsdUJBQXVCLEdBQUcsSUFBSTtJQUN6RixNQUFNLGFBQWEsR0FBRyxDQUFDLElBQVUsRUFBRSxFQUFFO1FBQ25DLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUE7SUFDOUQsQ0FBQyxDQUFBO0lBRUQsSUFBSSx1QkFBdUIsRUFBRTtRQUMzQixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUE7S0FDbkM7U0FBTTtRQUNMLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtLQUNqQztBQUNILENBQUM7QUFFRCxNQUFNLGVBQWUsR0FBRyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFMUQsSUFBSSxlQUFlLFlBQVksSUFBSSxFQUFFO0lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFBO0NBQ2xDO0tBQU07SUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtDQUNyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvb2sgfSBmcm9tICcuL2Jvb2suanMnO1xuaW1wb3J0IHsgYm9va3MgfSBmcm9tICcuL2Jvb2stY29sbGVjdGlvbi5qcyc7XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGdlbnJlXG4gKiBAcGFyYW0ge251bWJlcn0gcGFnZXNMaW1pdFxuICogQHJldHVybnMge0Jvb2t9XG4gKi9cbmZ1bmN0aW9uIGZpbmRTdWl0YWJsZUJvb2soZ2VucmU6IHN0cmluZywgcGFnZXNMaW1pdDogbnVtYmVyLCBtdWx0aXBsZVJlY29tbWVuZGF0aW9ucyA9IHRydWUpOiBCb29rIHwgQm9va1tdIHtcbiAgY29uc3QgZmluZEFsZ29yaXRobSA9IChib29rOiBCb29rKSA9PiB7XG4gICAgcmV0dXJuIGJvb2suZ2VucmUgPT09IGdlbnJlICYmIGJvb2sucGFnZUFtb3VudCA8PSBwYWdlc0xpbWl0XG4gIH1cblxuICBpZiAobXVsdGlwbGVSZWNvbW1lbmRhdGlvbnMpIHtcbiAgICByZXR1cm4gYm9va3MuZmlsdGVyKGZpbmRBbGdvcml0aG0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJvb2tzLmZpbmQoZmluZEFsZ29yaXRobSlcbiAgfVxufVxuXG5jb25zdCByZWNvbW1lbmRlZEJvb2sgPSBmaW5kU3VpdGFibGVCb29rKCdmYW50YXN5JywgMTAwMCk7XG5cbmlmIChyZWNvbW1lbmRlZEJvb2sgaW5zdGFuY2VvZiBCb29rKSB7XG4gIGNvbnNvbGUubG9nKHJlY29tbWVuZGVkQm9vay5uYW1lKVxufSBlbHNlIHtcbiAgY29uc29sZS5sb2cocmVjb21tZW5kZWRCb29rWzBdLm5hbWUpXG59XG4iXX0=