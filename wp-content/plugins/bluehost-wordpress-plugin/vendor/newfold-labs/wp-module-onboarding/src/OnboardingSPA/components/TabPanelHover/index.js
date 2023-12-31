/**
 * External dependencies
 */
import classnames from 'classnames';
import { partial, find } from 'lodash';

/**
 * WordPress dependencies
 */
import { useState, useEffect } from '@wordpress/element';
import { useInstanceId } from '@wordpress/compose';

/**
 * Internal dependencies
 */
import { NavigableMenu } from './navigableContainer';
import { Button } from '@wordpress/components';

const noop = () => { };

const TabButton = ({ tabId, onClick, children, selected, ...rest }) => (
    <Button
        role="tab"
        tabIndex={selected ? null : -1}
        aria-selected={selected}
        id={tabId}
        onClick={onClick}
        {...rest}
    >
        {children}
    </Button>
);

export default function TabPanelHover({
    className,
    children,
    tabs,
    initialTabName,
    orientation = 'horizontal',
    activeClass = 'is-active',
    notActiveClass = 'is-not-active',
    onSelect = noop,
}) {
    const instanceId = useInstanceId(TabPanelHover, 'tab-panel');
    const [selected, setSelected] = useState(null);

    const handleMouseOver = (tabKey) => {
        setSelected(tabKey);
        onSelect(tabKey);
    };

    const onNavigate = (childIndex, child) => {
        child.click();
    };
    const selectedTab = find(tabs, { name: selected });
    const selectedId = `${instanceId}-${selectedTab?.name ?? 'none'}`;

    useEffect(() => {
        const newSelectedTab = find(tabs, { name: selected });
        if (!newSelectedTab) {
            setSelected(
                initialTabName || (tabs.length > 0 ? tabs[0].name : null)
            );
        }
    }, [tabs]);

    return (
        <div className={className}>
            <NavigableMenu
                role="tablist"
                orientation={orientation}
                onNavigate={onNavigate}
                className="components-tab-panel__tabs"
            >
                {tabs.map((tab) => (
                    <TabButton
                        className={
                            `components-tab-panel__tabs-item ${tab.name === selected && activeClass} ${ tab.name !== selected && notActiveClass }`
                        }
                        tabId={`${instanceId}-${tab.name}`}
                        aria-controls={`${instanceId}-${tab.name}-view`}
                        selected={tab.name === selected}
                        key={tab.name}
                        onMouseOver={partial(handleMouseOver, tab.name)}
                    >
                        {tab.title}
                    </TabButton>
                ))}
            </NavigableMenu>
            {selectedTab && (
                <div
                    key={selectedId}
                    aria-labelledby={selectedId}
                    role="tabpanel"
                    id={`${selectedId}-view`}
                    className="components-tab-panel__tab-content">
                    {children(selectedTab)}
                </div>
            )}
        </div>
    );
}