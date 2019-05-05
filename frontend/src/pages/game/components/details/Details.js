import React from "react";
import { Tab, Grid, Label } from "semantic-ui-react";
import Moment from "react-moment";
import "./Details.css";

export const Details = ({ game, countries }) => {
  return (
    <Tab
      className="tabs margin-top"
      menu={{ secondary: true, pointing: true }}
      panes={[
        {
          menuItem: "team",
          render: () => (
            <Tab.Pane attached={false}>
              {game.people.map(p => (
                <Label key={p.id}>{p.name}</Label>
              ))}
            </Tab.Pane>
          )
        },
        {
          menuItem: "genres",
          render: () => (
            <Tab.Pane attached={false}>
              {game.genres.map(g => (
                <Label key={g.id}>{g.name}</Label>
              ))}
              {game.themes.map(t => (
                <Label key={t.id}>{t.name}</Label>
              ))}
            </Tab.Pane>
          )
        },
        {
          menuItem: "platforms",
          render: () => (
            <Tab.Pane attached={false}>
              {game.platforms.map(p => (
                <Label key={p.id}>{p.name}</Label>
              ))}
            </Tab.Pane>
          )
        },
        {
          menuItem: "details",
          render: () => (
            <Tab.Pane className="details" attached={false}>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <h3>
                      <span>Release Date</span>
                    </h3>
                  </Grid.Column>
                  <Grid.Column width={8} className="details">
                    <Label>
                      <Moment format="MMMM DD YYYY">
                        {game.original_release_date}
                      </Moment>
                    </Label>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <h3>
                      <span>Countries</span>
                    </h3>
                  </Grid.Column>
                  <Grid.Column width={8} className="details">
                    {countries.map(c => {
                      return <Label key={c}>{c}</Label>;
                    })}
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <h3>
                      <span>Developers</span>
                    </h3>
                  </Grid.Column>
                  <Grid.Column width={8} className="details">
                    {game.developers.map(d => {
                      return <Label key={d.id}>{d.name}</Label>;
                    })}
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <h3>
                      <span>Publishers</span>
                    </h3>
                  </Grid.Column>
                  <Grid.Column width={8} className="details">
                    {game.publishers.map(p => {
                      return <Label key={p.id}>{p.name}</Label>;
                    })}
                  </Grid.Column>
                </Grid.Row>
                {game.original_game_rating && (
                  <Grid.Row>
                    <Grid.Column width={8}>
                      <h3>
                        <span>Rating</span>
                      </h3>
                    </Grid.Column>
                    <Grid.Column width={8} className="details">
                      <Label>{game.original_game_rating[0].name}</Label>
                    </Grid.Column>
                  </Grid.Row>
                )}
              </Grid>
            </Tab.Pane>
          )
        }
      ]}
    />
  );
};
