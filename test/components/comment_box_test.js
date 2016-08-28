import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
	let component; 

	beforeEach(() => {
		component = renderComponent(CommentBox);
	});
	it('has class comment-box', () => {
		expect(component).to.have.class('comment-box');
	});
	it('has a text area', () => {
		expect(component.find('textarea')).to.exist;
	});
	it('has a button', () => {
		expect(component.find('button')).to.exist;
	});

	describe('entering come text', () => {
		beforeEach(() => {
			component.find('textarea').simulate('change', 'new comment');
		});

		it('shows text in text area', () => {
			expect(component.find('textarea')).to.have.value('new comment');
		});
		it('clears text when submitted', () => {
			component.simulate('submit');
			expect(component.find('textarea')).to.have.value('');
		});
	});
	

});
