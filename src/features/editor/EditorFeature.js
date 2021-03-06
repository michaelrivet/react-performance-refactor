import { useEffect } from "react";
import { Editor as EditorDraftJS, RichUtils } from "draft-js";
import { useSelector, useDispatch } from "react-redux";
import { Box } from '@sproutsocial/racine'
import {change, reset} from './editorSlice';

console.log('loading EditorFeature');

const EditorFeature = () => {
	useEffect(() => {
		console.log('Rendering EditorFeature');
	}, []);
	const dispatch = useDispatch();
	const editorState = useSelector(state => state.editor.editorState);

	const onChange = editorState => {
		dispatch(change(editorState));
	};

	const handleReset = () => {
		dispatch(reset());
	}

	const handleKeyCommand = command => {
		const newState = RichUtils.handleKeyCommand(
			editorState,
			command
		);
		if (newState) {
			onChange(newState);
			return "handled";
		}
		return "not-handled";
	};

	const onUnderlineClick = () => {
		onChange(
			RichUtils.toggleInlineStyle(editorState, "UNDERLINE")
		);
	};

	const onBoldClick = () => {
		onChange(RichUtils.toggleInlineStyle(editorState, "BOLD"));
	};

	const onItalicClick = () => {
		onChange(
			RichUtils.toggleInlineStyle(editorState, "ITALIC")
		);
	};

	return (
		<Box className="editorContainer" p={600}>
			<button onClick={onUnderlineClick}>U</button>
			<button onClick={onBoldClick}>
				<b>B</b>
			</button>
			<button onClick={onItalicClick}>
				<em>I</em>
			</button>
			<button onClick={handleReset}>Reset</button>
			<div className="editors">
				<EditorDraftJS
					editorState={editorState}
					handleKeyCommand={handleKeyCommand}
					onChange={onChange}
				/>
			</div>
		</Box>
	);
}

export default EditorFeature;
