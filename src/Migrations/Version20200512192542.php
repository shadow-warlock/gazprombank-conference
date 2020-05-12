<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200512192542 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE user_like (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, message_id INT NOT NULL, time DATETIME NOT NULL, INDEX IDX_D6E20C7AA76ED395 (user_id), INDEX IDX_D6E20C7A537A1329 (message_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE chat (id INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE answer (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, poll_id INT NOT NULL, text LONGTEXT NOT NULL, INDEX IDX_DADD4A25A76ED395 (user_id), INDEX IDX_DADD4A253C947C0F (poll_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE message (id INT AUTO_INCREMENT NOT NULL, reply_to_id INT DEFAULT NULL, user_id INT NOT NULL, time DATETIME NOT NULL, text LONGTEXT NOT NULL, INDEX IDX_B6BD307FFFDF7169 (reply_to_id), INDEX IDX_B6BD307FA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE poll (id INT AUTO_INCREMENT NOT NULL, question LONGTEXT NOT NULL, variants LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE conference (id INT AUTO_INCREMENT NOT NULL, poll_id INT DEFAULT NULL, chat_id INT NOT NULL, url VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_911533C83C947C0F (poll_id), UNIQUE INDEX UNIQ_911533C81A9A7125 (chat_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE user_like ADD CONSTRAINT FK_D6E20C7AA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE user_like ADD CONSTRAINT FK_D6E20C7A537A1329 FOREIGN KEY (message_id) REFERENCES message (id)');
        $this->addSql('ALTER TABLE answer ADD CONSTRAINT FK_DADD4A25A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE answer ADD CONSTRAINT FK_DADD4A253C947C0F FOREIGN KEY (poll_id) REFERENCES poll (id)');
        $this->addSql('ALTER TABLE message ADD CONSTRAINT FK_B6BD307FFFDF7169 FOREIGN KEY (reply_to_id) REFERENCES message (id)');
        $this->addSql('ALTER TABLE message ADD CONSTRAINT FK_B6BD307FA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE conference ADD CONSTRAINT FK_911533C83C947C0F FOREIGN KEY (poll_id) REFERENCES poll (id)');
        $this->addSql('ALTER TABLE conference ADD CONSTRAINT FK_911533C81A9A7125 FOREIGN KEY (chat_id) REFERENCES chat (id)');
        $this->addSql('ALTER TABLE user ADD name VARCHAR(255) NOT NULL, ADD lastname VARCHAR(255) NOT NULL, ADD email VARCHAR(255) DEFAULT NULL, ADD phone VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE conference DROP FOREIGN KEY FK_911533C81A9A7125');
        $this->addSql('ALTER TABLE user_like DROP FOREIGN KEY FK_D6E20C7A537A1329');
        $this->addSql('ALTER TABLE message DROP FOREIGN KEY FK_B6BD307FFFDF7169');
        $this->addSql('ALTER TABLE answer DROP FOREIGN KEY FK_DADD4A253C947C0F');
        $this->addSql('ALTER TABLE conference DROP FOREIGN KEY FK_911533C83C947C0F');
        $this->addSql('DROP TABLE user_like');
        $this->addSql('DROP TABLE chat');
        $this->addSql('DROP TABLE answer');
        $this->addSql('DROP TABLE message');
        $this->addSql('DROP TABLE poll');
        $this->addSql('DROP TABLE conference');
        $this->addSql('ALTER TABLE user DROP name, DROP lastname, DROP email, DROP phone');
    }
}
