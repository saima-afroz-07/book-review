import express from 'express';
const router = express.Router();
import BookReviewController from '../controller/review';
import { createtReviewSchema, deleteReviewSchema, getReviewSchema, updateReviewSchema } from '../middlewares/review_validate';

//get all reviews
router.get('/', BookReviewController.getAllReviews);

//get a review
router.get('/:id', getReviewSchema, BookReviewController.getReview);

//create a new review
router.post('/', createtReviewSchema, BookReviewController.createReview);

//update a review
router.put('/:id',updateReviewSchema, BookReviewController.updateReview);

//delete a review
router.delete('/:id', deleteReviewSchema, BookReviewController.deleteReview);

export default router;
