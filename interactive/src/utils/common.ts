import { toast } from 'react-toastify';

export class Common {
    static VOTED_CANDIDATE = 'Thank you for voting!';
    static notify(isUpvote: boolean, message: string) {
        let className = isUpvote ? 'toast-notification-upvote' : 'toast-notification-downvote';

        toast.info(message, {
            position: 'top-right',
            autoClose: 3000,
            delay: 100,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            className: className,
        });
    }
}
