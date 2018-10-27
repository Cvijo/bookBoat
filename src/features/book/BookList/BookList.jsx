import React from 'react'
import { data } from '../../../app/store/bookDetail';
import { Item, Segment, Icon, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const initData = data.getInitialState();
moment.locale('hr');

const BookList = (props) => {
    const bookDetail = initData.bookDetails[0];
    const bookType = initData.bookTypes.filter(type => bookDetail.idBookType === type.idBookType)[0];
    console.log(bookDetail);
    return (
        <div>
            <Item.Group divided>
                <Item as={Link} to="/"  className="bookListItem" style={{ borderLeft: '3px solid ' + bookType.color }}>
                    <Segment basic >
                        <Item.Image src="/assets/logo.png" size='mini' />
                    </Segment>
                    <Item.Content >
                        <Item.Header as='a'>{bookDetail.customerName} {bookDetail.customerSurname}</Item.Header>
                        {/* <Item.Meta>Description</Item.Meta> */}
                        <Item.Description>
                            <Grid>
                                <Grid.Column floated='left' width={8}>
                                    <Grid.Row>
                                        <Icon name="calendar outline" />
                                        <Icon name="arrow alternate circle left outline" />
                                        {moment(bookDetail.dateFrom).format('dd DD.MM.YYYY HH:mm')}
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Icon name="calendar outline" />
                                        <Icon name="arrow alternate circle right outline" />
                                        {moment(bookDetail.dateTo).format('dd DD.MM.YYYY HH:mm')}
                                    </Grid.Row>
                                </Grid.Column>
                                <Grid.Column floated='right' width={8}>
                                    <Icon name="phone" />
                                    {bookDetail.customerPhone}
                                </Grid.Column>
                            </Grid>
                        </Item.Description>
                        {/* <Item.Extra>Additional Details</Item.Extra> */}
                    </Item.Content>
                </Item>
                <Item>
                    <Item.Image src="/assets/logo.png" size='mini'>
                    </Item.Image>
                    <Item.Content>
                        <Item.Header as='a'>Header</Item.Header>
                        <Item.Meta>Description</Item.Meta>
                        <Item.Description>
                            Description
                </Item.Description>
                        <Item.Extra>Additional Details</Item.Extra>
                    </Item.Content>
                </Item>
                <Item>
                    <Item.Image src="/assets/logo.png" size='mini'>
                    </Item.Image>
                    <Item.Content>
                        <Item.Header as='a'>Header</Item.Header>
                        <Item.Meta>Description</Item.Meta>
                        <Item.Description>
                            Description
                </Item.Description>
                        <Item.Extra>Additional Details</Item.Extra>
                    </Item.Content>
                </Item>
            </Item.Group>
        </div>
    )
}

export default BookList
