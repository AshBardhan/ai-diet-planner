import React from 'react';
import './Modal.scss';
import IconButton from './IconButton';

export default function Modal({show = false, onHide, children}) {
	return (
		<div className={`modal-container ${(show && 'open') || ''}`}>
			<div className="modal-backdrop" onClick={onHide}></div>
			<div className="modal-body">
				<div className="modal-close-btn">
					<IconButton isHoverable="true">
						<svg width="14" height="14" viewBox="0 0 32 32">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M16 12.696l10.03-10.03 3.304 3.305L19.304 16l10.03 10.03-3.304 3.303L16 19.303 5.971 29.334 2.667 26.03 12.697 16 2.666 5.97l3.304-3.303 10.03 10.029z" fill="currentColor" />
						</svg>
					</IconButton>
				</div>
				<div className="modal-content">{children}</div>
			</div>
		</div>
	);
}
