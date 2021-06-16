import React from "react";
import * as BsIcons from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import {
	SideBarContainer,
	SideBar,
	SideBarMax,
	DotWrapper,
	Dot,
	Icon,
	ListItem,
	SideBarContentWrapper,
	SideBarContent,
} from "./Sidebar.styles";
import { SidebarData } from "./SidebarData";

const Sidebar = () => {
	return (
		<>
			<SideBarContainer>
				<SideBar>
					<DotWrapper>
						<Dot style={{ color: "#dba060" }}>.</Dot>
						<Dot style={{ color: "#b5d0c1" }}>.</Dot>
						<Dot style={{ color: "#ffb6c1" }}>.</Dot>
					</DotWrapper>
					<Icon style={{ background: "#c0e8ff" }}>
						<BsIcons.BsTriangleFill />
					</Icon>
					<Icon style={{ background: "#d1ffd5" }}>
						<BsIcons.BsSquareFill />
					</Icon>
					<Icon style={{ background: "#4c4c4c" }}>
						<GoPlus />
					</Icon>
				</SideBar>
				<SideBarMax>
					<SideBarContentWrapper>
						<SideBarContent>Hello</SideBarContent>
						<SideBarContent>
							{SidebarData.map((item, index) => {
								return (
									<ListItem key={index}>
										<a href="#" to={item.path}>
											{item.icon}
											<span>{item.title}</span>
										</a>
									</ListItem>
								);
							})}
						</SideBarContent>
					</SideBarContentWrapper>
				</SideBarMax>
			</SideBarContainer>
		</>
	);
};

export default Sidebar;
